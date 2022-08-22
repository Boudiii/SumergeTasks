export class Movie {
  //Attributes needed for card view + detailed
  public title: string;
  public overview: string;
  public genres: any[];
  public poster_path: string;
  public logo_path: any;
  public release: number;
  public id: any;
  public total:any
  //Attributes needed for detailed view only
  public runtime: any;
  public vote_average: any;
  public vote_count: any;
  public credits: Credits[] | undefined | null;
  public director: any;
  constructor(title: string, overview: string, genres: string[], poster_path: string,release: number,logo_path:any, id?: any, runtime?: any,credits?:Credits[], vote_average?: any, vote_count?: any) {
    this.title = title;
    this.overview = overview;
    this.genres = genres;
    this.poster_path = poster_path;
    this.logo_path = logo_path;
    this.release = release;
    this.id = id;
    this.runtime = runtime;
    this.vote_average = runtime;
    this.vote_count = runtime;
    this.credits = credits;


  }
  public setCredits(credits:Credits[]) {
    this.credits = credits;
 }

}
export interface Credits {
  role: string | null | undefined,
  name: string | null | undefined,
  profile_img: string| null | undefined
}