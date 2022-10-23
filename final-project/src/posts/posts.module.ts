import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { FilesService } from 'src/files/files.service';
import { User } from 'src/users/users.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {Post} from './posts.model';

@Module({
    providers: [PostsService],
    controllers: [PostsController],
    imports: [
        SequelizeModule.forFeature([User, Post]),
        FilesModule
    ]
})
export class PostsModule {}
