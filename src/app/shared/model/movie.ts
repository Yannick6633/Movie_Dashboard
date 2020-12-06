export class Movie {
  id: number;
  title: string;
  description: string;
  picture: string;
  year: Date;
  note: number;
  category: string;
  actors: string;

  /**
   * Constructor
   *
   * @param movie: movie
   *
   */
  constructor(movie?: Movie) {
    this.id = movie.id || null;
    this.title = movie.title || '';
    this.description = movie.description || '';
    this.picture = movie.picture || '';
    this.year = movie.year || null;
    this.note = movie.note || null;
    this.category = movie.category || '';
    this.actors = movie.actors || '';
  }
}
