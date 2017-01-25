import { PipeTransform, Pipe } from '@angular/core';

import { ICause } from '../shared/cause.model';

@Pipe({
    name: 'causeFilter'
})
export class CauseFilterPipe implements PipeTransform {

    transform(value: ICause[], filterBy: string): ICause[] {
        console.log(filterBy);

        if (typeof filterBy == 'undefined' || filterBy == '-1') {
            return value;
        }

        if (filterBy == '0') {
            return value.filter((cause: ICause) => cause.isPrivate === true);    
        }

        if (filterBy == '1') {
            return value.filter((cause: ICause) => cause.isPrivate === false);
        }
    }

}