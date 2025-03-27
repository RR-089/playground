import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateLibraryDTO, GetLibraryDTO } from 'src/dtos/library.dto';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get()
  async getLibraries(@Query() query: GetLibraryDTO) {
    return await this.libraryService.getLibraries(query);
  }

  @Post()
  async createLibrary(@Body() body: CreateLibraryDTO) {
    return await this.libraryService.createLibrary(body);
  }
}
