// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { DatabaseModule } from './database/database.module';
// import { UsersModule } from './users/users.module';
// import { AddonsModule } from './addons/addons.module';
// import { BrandsModule } from './brands/brands.module';
// import { AuthService } from './auth/auth.service';
// import { AuthModule } from './auth/auth.module';
// import validateEnv from './config/env';
// import { JwtService } from '@nestjs/jwt';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//       cache: true,
//       validate: validateEnv,
//     }),
//     DatabaseModule,
//     AuthModule,
//     UsersModule,
//     AddonsModule,
//     BrandsModule,
//     AuthModule,
//   ],
//   providers: [AuthService, JwtService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeesModule } from './employees/employees.module';
import { OfficesModule } from './offices/office.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    // AuthModule,
    OfficesModule,
    EmployeesModule
  ],
  providers: [],
})

export class AppModule {}