import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { CoursesController } from './courses/courses.controller.js';
import { CoursesService } from './courses/courses.service.js';
import { CoursesModule } from './courses/courses.module.js';
import { LessonsController } from './lessons/lessons.controller.js';
import { LessonsService } from './lessons/lessons.service.js';
import { LessonsModule } from './lessons/lessons.module.js';
import { EnrollmentsModule } from './enrollments/enrollments.module.js';
import { AdminService } from './admin/admin.service.js';
import { AdminController } from './admin/admin.controller.js';
import { AdminModule } from './admin/admin.module.js';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    AuthModule,
    UsersModule,
    CoursesModule,
    LessonsModule,
    EnrollmentsModule,
    AdminModule,
  ],
  controllers: [
    AppController,
    CoursesController,
    LessonsController,
    AdminController,
  ],
  providers: [AppService, CoursesService, LessonsService, AdminService],
})
export class AppModule {}
