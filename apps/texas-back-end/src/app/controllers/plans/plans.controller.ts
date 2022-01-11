import { Controller, Get } from '@nestjs/common';

class Plan {
    readonly id: string = '';
    readonly title: string = '';
    readonly imgSrc: string = '';
    readonly price: string = '';
    readonly name: string = '';
    readonly phoneNumber: string = '';
    readonly description: string = '';
    readonly url: string = '';
}

const allPlans: Plan[] = [
    {
        id: '1',
        title: '3-yr Peace of Mind',
        imgSrc: 'https://energysavings.com/wp-content/uploads/2021/03/just-energy-logo.svg',
        price: '11.9¢',
        name: 'Rate Shield - 36',
        phoneNumber: '(866) 224-2308',
        description: 'Enjoy the stability of a fixed energy rate during the term of your agreement!',
        url: ''
    },
    {
        id: '2',
        title: '3-yr Peace of Mind',
        imgSrc: 'https://energysavings.com/wp-content/uploads/2021/03/just-energy-logo.svg',
        price: '11.9¢',
        name: 'Empower - 12',
        phoneNumber: '(866) 224-2308',
        description: 'Enjoy the stability of a fixed energy rate during the term of your agreement!',
        url: ''
    },
    {
        id: '3',
        title: '3-yr Peace of Mind',
        imgSrc: 'https://energysavings.com/wp-content/uploads/2021/03/just-energy-logo.svg',
        price: '11.9¢',
        name: 'Amigo Energy Purely Green - 12',
        phoneNumber: '(866) 224-2308',
        description: 'Enjoy the stability of a fixed energy rate during the term of your agreement!',
        url: ''
    },
    {
        id: '4',
        title: '3-yr Peace of Mind',
        imgSrc: 'https://energysavings.com/wp-content/uploads/2021/03/just-energy-logo.svg',
        price: '11.9¢',
        name: '12 Month (No Min Usage Fee)',
        phoneNumber: '(866) 224-2308',
        description: 'Enjoy the stability of a fixed energy rate during the term of your agreement!',
        url: ''
    }
]

@Controller('plans')
export class PlansController {

    @Get()
    async index() {
        return allPlans;
    }

}
