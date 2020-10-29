import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { Coffee } from './coffee.entity';
import coffeesConfig from './coffees.config';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Flavor } from './entities/flavor.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Coffee, Flavor, Event ]), 
        ConfigModule.forFeature(coffeesConfig)],
    providers: [CoffeesService],
    controllers:[CoffeesController]

})
export class CoffeesModule {

}
