import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { RegionModule } from './schemas/region/region.module';
import { DepartmentModule } from './schemas/department/department.module';
import { MunicipalityModule } from './schemas/municipality/municipality.module';
import { UserModule } from './schemas/user/user.module';
import { RoleModule } from './schemas/role/role.module';
import { ModuleModule } from './schemas/module/module.module';
import { CommerceModule } from './schemas/commerce/commerce.module';
import { BranchModule } from './schemas/branch/branch.module';
import { ComplaintModule } from './schemas/complaint/complaint.module';
import ormConfig from './config/typeOrmConfig';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
      debug: true,
    }),
    TypeOrmModule.forRoot(ormConfig),
    RegionModule,
    DepartmentModule,
    MunicipalityModule,
    UserModule,
    RoleModule,
    ModuleModule,
    CommerceModule,
    BranchModule,
    ComplaintModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
