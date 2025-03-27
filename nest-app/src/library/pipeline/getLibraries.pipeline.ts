import { PipelineBuilder } from 'src/common/pipelineBuilder';
import { GetLibraryDTO } from 'src/dtos/library.dto';

export const getLibrariesPipeline = (query: GetLibraryDTO) => {
  const { search, page, limit, sortBy, sortOrder, names, locations } = query;

  return new PipelineBuilder()
    .match(
      search
        ? {
            $or: [
              { name: { $regex: search, options: 'i' } },
              { location: { $regex: search, options: 'i' } },
            ],
          }
        : {},
    )
    .match({
      $and: [
        names?.length ? { name: { $in: names } } : {},
        locations?.length ? { location: { $in: locations } } : {},
      ],
    })
    .sort(sortBy || 'name', sortOrder || 1)
    .skip((page && limit && (page - 1) * limit) || 0)
    .limit(limit)
    .build();
};
