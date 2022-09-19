import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  term:string = ''
  transform(moviesOrTvs: any[], term: string): any[] {
    return moviesOrTvs.filter((m)=> m.title.toLowerCase().includes(term.toLowerCase()));
  }

}
