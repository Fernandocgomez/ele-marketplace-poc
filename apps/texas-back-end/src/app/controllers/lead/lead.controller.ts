import { Body, Controller, Get, Param, Put } from '@nestjs/common';

interface Lead {
    id: string;

    [key: string]: any;
}

let data: Lead[] = [
    {
        "id": "1",
        "email": "fernandocgomez@live.com"
    },
    {
        "id": "2",
        "email": "gomez@live.com"
    },
];


@Controller('lead')
export class LeadController {
    @Get(':id')
    async show(@Param() params) { 
        const lead = await data.find((l) => {
            return l.id === params.id;
        })

        
        return lead;

    }

    @Put()
    async edit(@Body() newLead: Lead) {
        const newData = await data.filter((l) => {
            return l.id !== newLead.id;
        });

        data = newData;

        data.push(newLead);

        return newLead;

    }
}
