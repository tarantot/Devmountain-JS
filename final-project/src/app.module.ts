import {Module} from "@nestjs/common"
import { AppService } from "./app.service";
import {AppController} from "./app.controller"
import {SequelizeModule} from "@nestjs/sequelize"
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';
import { Post } from './posts/posts.model';
import { PostsModule } from "./posts/posts.module";
import { join } from "path";
import { TokenService } from './token/token.service';
import { TokenController } from './token/token.controller';
import { TokenModule } from './token/token.module';
import * as path from 'path';


@Module({
    controllers: [AppController, PostsController, TokenController], 
    providers: [AppService, PostsService, TokenService],
    imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
        }),
      ServeStaticModule.forRoot({
          rootPath: path.resolve(__dirname, 'static')
        }),
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User, Role, UserRoles, Post],
          autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        TokenModule,
      ],
})

export class AppModule {}