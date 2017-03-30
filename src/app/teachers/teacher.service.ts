import {Teacher} from './teacher.entity';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherService {
	teachers: Teacher[] = [];
	
	constructor(private http: Http) {

	}
	
	addNewTeacher() {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
    
    var newTeacher = new Teacher("0", 'New Teacher', 'photourl', 'New Summary');
		
		this.http
			.post('http://localhost:8080/api/teacher', JSON.stringify(newTeacher), headers)
			.map(res => res.json())
			.subscribe(
				data => this.teachers.push(data),
				err => this.logError(err),
				() => console.log('Updated Teacher')
			);	
	}
	
	saveTeacher(teacher: Teacher) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		this.http
			.post('http://localhost:8080/api/teacher', JSON.stringify(teacher), headers)
			.map(res => res.json())
			.subscribe(
				null,
				err => this.logError(err),
				() => console.log('Updated Teacher')
			);	
	}
	
	deleteTeacher(teacher: Teacher) {
		this.http
			.delete('http://localhost:8080/api/teacher/' + teacher._id)
			.map(res => res.text())
			.subscribe(
				data => { 
					var midx = -1;
					
					this.teachers.forEach( (t, idx) => { 
						if (t._id == teacher._id) { 
							midx = idx;  
						}
					});
					
					this.teachers.splice(midx, 1); 
				},
				err => this.logError(err),
				() => console.log('Request for all teachers completed successfully')
			);	
	}
	
	loadAllTeachers() {
		this.http
			.get('http://localhost:8080/api/teacher')
			.map(res => {
        return res.json()
      })
			.subscribe(
				data => {
          this.teachers = data;
        },
				err => this.logError(err),
				() => console.log("Loaded all teachers")
			);
	}

  loadTeacherById(id) {
    this.http
      .get('http://localhost:8080/api/teacher/' + id)
      .map(res => res.json())
      .subscribe(
        data => this.teachers = [data],
        err => this.logError(err),
        () => console.log("Loaded teacher with id " + id)
      );
  }
	
	logError(err) {
		console.error('There was an error: ' + err);
	}
}
