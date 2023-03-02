import { Module } from "@nestjs/common";
import { OfficesController } from './office.controller';
import { OfficesService } from './office.service';

@Module({
    controllers: [OfficesController],
    providers: [OfficesService]
})

export class OfficesModule {}