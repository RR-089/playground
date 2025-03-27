export class PipelineBuilder {
  private pipeline: any[] = [];

  match(condition: object): this {
    if (condition && Object.keys(condition).length > 0) {
      this.pipeline.push({ $match: condition });
    }
    return this;
  }

  sort(field: string, order: number): this {
    if (field) {
      this.pipeline.push({ $sort: { [field]: order } });
    }
    return this;
  }

  skip(count?: number): this {
    if (count && count >= 0) {
      this.pipeline.push({ $skip: count });
    }
    return this;
  }

  limit(count?: number): this {
    if (count && count > 0) {
      this.pipeline.push({ $limit: count });
    }
    return this;
  }

  lookup(
    from: string,
    localField: string,
    foreignField: string,
    as: string,
  ): this {
    if (from && localField && foreignField && as) {
      this.pipeline.push({
        $lookup: { from, localField, foreignField, as },
      });
    }
    return this;
  }

  facet(facets: Record<string, any[]>): this {
    if (facets && Object.keys(facets).length > 0) {
      this.pipeline.push({ $facet: facets });
    }
    return this;
  }

  addStage(stage: object): this {
    if (stage) {
      this.pipeline.push(stage);
    }
    return this;
  }

  build(): any[] {
    return this.pipeline;
  }
}
