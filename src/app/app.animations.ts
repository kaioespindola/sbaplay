import { trigger,style,transition,animate,query,stagger} from '@angular/animations';

const defaultDelay: number = 400;

export abstract class Animations {

    public static fadeIn(delay: number = defaultDelay) {
        return [
            trigger('fadeIn', [
                transition('* => *', [
                style({ opacity: 0 }),
                animate(`${delay}ms ease-in-out`,
                style({opacity: 1}))
                ])
            ])
        ]
    }

    public static loadList(delay: number = defaultDelay) {
        return [
            trigger('loadList', [
                transition('* <=> *', [
                  query(':enter', [
                    style({ opacity: 0, transform: 'translateY(-15px)' }),
                    stagger('50ms',
                    animate(`${delay}ms ease-out`,
                    style({ opacity: 1, transform: 'translateY(0px)'})))
                  ], { optional: true }),
                  query(':leave', animate('50ms', style({ opacity: 0 })), {
                    optional: true
                  })
                ])
            ])
        ]
    }
}