import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private CategoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.CategoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppError('Category Already exists!');
    }

    await this.CategoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
