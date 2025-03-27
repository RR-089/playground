import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Library {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  location: string;
}

export const libraySchema = SchemaFactory.createForClass(Library);
