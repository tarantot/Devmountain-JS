import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                                   private fileService: FilesService) {
        
    }

    async create(dto: CreatePostDto, image: any) {
        const fileName = this.fileService.createFile(image)
        const post = await this.postRepository.create({...dto, image: fileName})
        return post;
    }
}
