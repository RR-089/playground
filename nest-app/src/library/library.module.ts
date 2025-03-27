import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, libraySchema } from 'src/models/library.model';
import { LibraryController } from './library.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Library.name, schema: libraySchema }]),
  ],
  providers: [LibraryService],
  exports: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}
