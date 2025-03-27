import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ParseQuery } from '../common/parseQuery.decorator';

export class GetLibraryDTO {
  @IsOptional()
  @ParseQuery('string')
  search?: string;

  @IsOptional()
  @ParseQuery('int')
  page?: number;

  @IsOptional()
  @ParseQuery('int')
  limit?: number;

  @IsOptional()
  @ParseQuery('string')
  sortBy?: string;

  @IsOptional()
  @ParseQuery('int')
  sortOrder?: number;

  @IsOptional()
  @ParseQuery('json')
  names?: string[];

  @IsOptional()
  @ParseQuery('json')
  locations?: string[];
}

export class CreateLibraryDTO {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  names: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  locations: string;
}
