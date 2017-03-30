export class Teacher {
  public _id: string;
  public name: string;
  public photoUrl: string;
  public summary: string;

  constructor(id: string, name: string, photoUrl: string, summary: string) {
    this._id = id;
    this.name = name;
    this.photoUrl = photoUrl;
    this.summary = summary;
  }
}