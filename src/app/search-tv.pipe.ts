import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  term:string = ''
  transform(moviesOrTvs: any[], term: string): any[] {
    return moviesOrTvs.filter((m)=> m.name.toLowerCase().includes(term.toLowerCase()));
  }

}
