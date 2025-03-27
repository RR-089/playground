import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLibraryDTO, GetLibraryDTO } from 'src/dtos/library.dto';
import { Library } from '../models/library.model';
import { getLibrariesPipeline } from './pipeline/getLibraries.pipeline';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Library.name) private readonly libraryModel: Model<Library>,
  ) {}

  async getLibraries(query: GetLibraryDTO): Promise<Library[]> {
    const pipeline = getLibrariesPipeline(query);
    return await this.libraryModel.aggregate(pipeline, {
      collation: { locale: 'en', strength: 2 },
    });
  }

  async createLibrary(body: CreateLibraryDTO): Promise<Library> {
    return await this.libraryModel.create(body);
  }
}
