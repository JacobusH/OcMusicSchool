import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import * as _ from 'underscore';

import {Teacher} from './teacher.entity';
import {TeacherService} from './teacher.service';
@Component({
    template: `
        <h1>Teachers Details {{id}}</h1>
        <p>{{summary}}</p>
    `,
    providers: [TeacherService, MockBackend]
})
export class TeachersDetailsComponent implements OnInit, OnDestroy
{
    id;
    subscription;

//     constructor(private service: TeacherService, private backend: MockBackend) {   
//     this.backend.connections.subscribe( c => {

//       let singleTeacherMatcher = /\/api\/teacher\/([0-9]+)/i;        
      
//       // return all teachers
//       // GET: /teacher
//     //   if (c.request.url === "http://localhost:8080/api/teacher" && c.request.method === 0) {
//     //     let res = new Response(new ResponseOptions({
//     //       body: JSON.stringify(this.db)
//     //     }));
        
//     //     c.mockRespond(res);
//     //   }
//       // return teacher matching the given id
//       // GET: /teacher/:id
//     //   else if (c.request.url.match(singleTeacherMatcher) && c.request.method === 0) {
//     //     let matches = this.db.filter( (t) => {
//     //       return t._id == c.request.url.match(singleTeacherMatcher)[1]
//     //     });
        
//     //     c.mockRespond(new Response(new ResponseOptions({
//     //       body: JSON.stringify(matches[0])
//     //     }))); 
//     //   }
//       // Add or update a teacher
//       // POST: /teacher
//     //   else if (c.request.url === 'http://localhost:8080/api/teacher' && c.request.method === 1) {
//     //     let newTeacher: Teacher = JSON.parse(c.request._body);
        
//     //     let existingTeacher = this.db.filter( (ticket: Teacher) => { return ticket._id == newTeacher._id});
//     //     if (existingTeacher && existingTeacher.length === 1) {
//     //       Object.assign(existingTeacher[0], newTeacher);
          
//     //       c.mockRespond(new Response(new ResponseOptions({
//     //         body: JSON.stringify(existingTeacher[0])
//     //       })));
//     //     } else {
//     //       newTeacher._id = parseInt(_.max(this.db, function(t) {
//     //         return t._id;
//     //       })._id || 0, 10) + 1 + '';
    
//     //       this.db.push(newTeacher);
          
//     //       c.mockRespond(new Response(new ResponseOptions({
//     //         body: JSON.stringify(newTeacher)
//     //       })));
//     //     }
//     //   }
//       // Delete a ticket
//       // DELETE: /ticket/:id
//     //   else if (c.request.url.match(singleTeacherMatcher) && c.request.method === 3) {
//     //     let ticketId = c.request.url.match(singleTeacherMatcher)[1];
//     //     let pos = _.indexOf(_.pluck(this.db, '_id'), ticketId);
        
//     //     this.db.splice(pos, 1);
        
//     //     c.mockRespond(new Response(new ResponseOptions({
//     //       body: JSON.stringify({})
//     //     })));
//     //   }
      
//     });
//   }

constructor(private _route: ActivatedRoute)
    {
         
    }

    ngOnInit()
    {
        this.subscription = this._route.params.subscribe(params => {
            this.id = params["id"];
        })
        
        // this.service.loadAllTeachers();
    }

    ngOnDestroy()
    {
        this.subscription.unsubscribe();
    }


    // Fake Teachers DB
  private db: Teacher[] = [
    new Teacher(
        '1', 'Stella Kotova', 'photourl',
        `Stella Kotova was born in Tashkent, Uzbekistan (one of the former Soviet Republics). She emigrated to the United States in 1979 and settled in Chicago, IL where she attended DePaul University to pursue a degree in Piano Performance. Concurrent with her studies, she began performing throughout the Chicago area, playing piano and singing in five languages. 

        In 1985, Stella moved to Tustin, CA where she she began teaching. She opened Orange County Music School School in 1999 and assembled an international faculty of highly credentialed music teachers to offer individual and group lessons for a variety of instruments. 

        From classical to jazz to pop, Stella's repertoire embraces music in all its forms, and allows her to share her love of music with a wide range of young and adult students. Stella belongs to the Music Teachers' Association of Southern California (MTAC - Orange Coast Cities Branch) through which her students may participate in Theory, Musicianship and Performance testing at beginner, intermediate and advanced levels. 

        In addition to teaching, Stella continues to perform as a solo pianist and accompanist, providing music for all occasions and venues. She has recorded numerous CDs, both solo and in collaboration with Southern California musicians. She has also composed and arranged original children's music including a collection of pieces that accompany a fairy tale book series produced for the Vietnamese community. 

        Stella believes that music is a universal language that stirs the soul, unites cultures even bridges generation gaps. It is a gift that we can all share - an invitation to a better world of peace and harmony.`),
         new Teacher(
        '2', 'Allison Zema', 'photourl',
        `Allison is currently completing her Bachelor of Arts in Vocal Performance at University of California, Irvine and will be graduating in June of 2013. She has performed both as a member of many world-renowned choirs at the university as well as a soloist in venues such as the National Gallery of Art in Washington D.C.. Allison is classically trained in opera and also specializes in vocal jazz, musical theater and pop. Her multi-dimensional background of ballet, drama and piano also influence her unique and fun teaching style. She has been teaching voice since 2010 and is incredibly passionate about her student's development in both technique and performance.`),
        new Teacher(
        '3', 'Denean Dyson', 'photourl',
        `Holding a BA in music from CSU Fullerton School of Music, Denean Dyson is a free spirited Mezzo-Soprano with a true love for music. Classically trained yet accomplished in many genres including Jazz, Soul and R&B, Denean continues to showcase her artistry as a soloist throughout the US and abroad in various public performances and recitals, for USO Tours, and for corporate and private events. Her vocal capabilities have bestowed her the privilege of performing with many well-known artists including singer/actress Reba McEntire, famed Mezzo-Soprano Susan Graham, and jazz legend Barbara Morrison and have more recently earned her a featured solo in the premiere performance and Delos Music recording of Jake Heggie�s Choral Opera "The Radio Hour." Since her graduation from CSUF in 2010, Denean has also been performing locally with several choral ensembles, including the Long Beach Camerata Singers, The Pacific Chorale, The John Alexander Singers, a chamber ensemble comprised of singers who are the professional core of The Pacific Chorale, and for gifted conductors like Gustavo Dudamel, John Williams, Ludwig Wicki, Keith Lockhart, and Carl St. Clair.

        Denean is driven by the emotion and inspiration music can bring, and sharing that harmony with the world is her joy. She is excited to share her experience and methods with her students, helping each student find a passion for music and obtain the technique and performance confidence they need so they too can share their art with the world.`),
         new Teacher(
        '4', 'Brittany Su', 'photourl',
        `Brittany Su was born and raised in Southern California. At an early age, she was attracted to the sound of the violin and began taking lessons. As she progressed, so did her passion and hunger for music. It was her teacher and mentor Anne Thatcher that truly changed and guided her musical trajectory. In her youth, Ms. Su has participated in many orchestras and traveled around the world performing in places such as Austria, Leipzig, Vienna, and many other places. She had also served as the associate concertmistress for the Orange County Youth Symphony Orchestra where she won their solo competition and made her first debut with orchestra in 2006. She went on to further her musical education at the Peabody Institute of the Johns Hopkins University, receiving a Bachelors of Music in violin performance. During her time at the Peabody Institute, she had the privilege of studying under Shirley Givens (studied with Ivan Galamian and is also a faculty at The Juilliard School) and Keng-Yuen Tseng (studied with Erick Friedman, silver medalist of the Queen Elisabeth International Violin Competition, faculty and Chair in Strings at Peabody). Along with many other mentors in the violin world such as Bing Wang (concertmistress of the LA Philharmonic), Ms. Su's heart and vision for music has been sculpted to want to share it and use it as a universal language that speaks to our souls. She continues to perform both solo and collaboratively with other musicians. As a teacher, she desires to guide others well into becoming a true musician and show them how to take music beyond the notes.`),
        new Teacher(
        '5', 'Stephanie Hernandez', 'photourl',
        `After begging her parents profusely, Stephanie started learning to play the violin at age 9. She was a student of the Colburn School of Music in Los Angeles for the next 9 years until she was 18. At the school she performed in solo recitals, the Orchestra da Camera, and the Colburn Chamber Orchestra. She studied violin at the University of California, Irvine. She attained a Bachelor of Music Degree in Violin Performance upon completion of a solo junior and senior recital and participation in symphonic music, chamber music, musicals, and shows. She has studied with Sandi Rynerson, Chan Ho Yun, and Haroutune Bedelian.

        She has taught private violin lessons throughout various music schools in the Orange County area. She also worked with Soli Encore, an organization that provides group music lessons to students in elementary schools. Stephanie got the opportunity to play the violin when she was teaching English abroad in Fukui Prefecture, Japan. She became a member of her community ensemble, the Fukui Symphony Orchestra. She also organized a chamber music recital with fellow members of the Japanese community. Stephanie is an avid street performer, so you might find her playing sometime in Laguna Beach!`),
        new Teacher(
        '6', 'Steve Clar', 'photourl',
        `Steve has 12 years of private music lesson experience and has taught music to grades K - 8 in a public school in New Jersey before relocating to California in July 2016. He holds an A.A. in piano and guitar performance and received his B.A. in Music Education from Monmouth University. Steve is a singer/songwriter and enjoys composing, recording, and performing all types of music. Having taught many different age groups, instruments, and in various settings (from private lessons to full band and chorus classes), Steve is an experienced and versatile music educator.`),
         new Teacher(
        '7', 'Ivan Dantas', 'photourl',
        `Ivan Dantas was born in S�o Paulo, Brazil. At seven years old he had his first contact with the violin through the Suzuki Method. He was accepted at the S�o Paulo State School of Music at the age of 16, where he received his Conservatory Diploma in violin. There he studied with his teacher and mentor, Inna Meltser Rakevich, a Russian violinist who graduated from the Saint Petersburg Conservatory in the class of Vladimir Bronin. Parallel to his violin studies, Mr. Dantas completed his B.M. in Music Composition at S�o Paulo State University. He received a full scholarship from that institution to study for a semester at the University of Georgia. He has participated in many orchestras (Tom Jobim Orchestra, Port of Santos Orchestra, UGA Orchestra, UGA Opera Ensemble, CSUN Orchestra), chamber ensembles, as well as recorded in studio for singers, played on theater plays, and performed in musical theater. Currently he is studying with Dr. Lorenz Gamma (a student of Mark Kaplan, Steven Staryk, and Franco Gulli), at California State University Northridge, to obtain his Masters Degree in Violin Performance. His teaching philosophy is that all people should have contact with music and everyone is capable of learning any instrument. He believes that each student needs a tailored approach that takes advantage of each individual strengths that the student shows, in this way he will feel motivated to develop his own personal artistic expression through music.`),
         new Teacher(
        '8', 'Fatima Rizvi', 'photourl',
        `Fatima immensely enjoys sharing her passion for the vocal arts with students of all ages and abilities! Her background in classical vocal performance provides her with insight in teaching diverse genres of music. She believes that strong technical foundations are critical for a musician�s growth as a performer and artist.

        Fatima is an active musician in the Orange County area with a passion especially for choral music and opera. She has also performed in recitals and opera productions at the University of California, Irvine, where she received her BA in Music in 2012, and at Cal State Fullerton, where she is currently pursuing a master's degree in vocal performance.`),
        new Teacher(
        '8', 'Jeff O\'Neal', 'photourl',
        `Jeff O'Neal is a music educator specializing in wind instruments from Dallas, Texas. He received his bachelors in music from the University of Texas at Arlington and later went on to receive his Orff Schulwerk Certification from Southern Methodist University. Jeff has spent the last decade in the Dallas area teaching everything from beginning instrumentalists, full wind band, chamber ensembles, Orff instrumental ensembles and even primary music to elementary students. He has also performed with many ensembles and bands during his time there ranging from brass bands, wind ensembles and even rock n� roll bands. Recently Jeff and his family made the move out to the west coast to begin a new chapter closer to the beach. Jeff wishes to enrich student�s lives with music and not only teach an understanding of the art, but how to be successful throughout life with the skills they acquire. During his free time Jeff enjoys surfing, composing, art and the occasional trip to Disneyland.`)
  ];

}