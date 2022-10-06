import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let carsRepository: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepository);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepository.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 110.0,
      license_plate: 'Car_plate',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    // const car1 = await carsRepository.create({
    //   name: 'Car2',
    //   description: 'Car description',
    //   daily_rate: 110.0,
    //   license_plate: 'Car_plate',
    //   fine_amount: 40,
    //   brand: 'Car_brand',
    //   category_id: 'category_id',
    // });

    const car2 = await carsRepository.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 110.0,
      license_plate: 'Car_plate',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: car2.brand,
    });

    console.log(cars);

    expect(cars).toEqual([car2]);
  });

  it('should be able to list all available cars by name', async () => {
    // const car1 = await carsRepository.create({
    //   name: 'Car2',
    //   description: 'Car description',
    //   daily_rate: 110.0,
    //   license_plate: 'Car_plate',
    //   fine_amount: 40,
    //   brand: 'Car_brand',
    //   category_id: 'category_id',
    // });

    const car2 = await carsRepository.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 110.0,
      license_plate: 'Car_plate',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: car2.name,
    });

    console.log(cars);

    expect(cars).toEqual([car2]);
  });
  it('should be able to list all available cars by category', async () => {
    // const car1 = await carsRepository.create({
    //   name: 'Car2',
    //   description: 'Car description',
    //   daily_rate: 110.0,
    //   license_plate: 'Car_plate',
    //   fine_amount: 40,
    //   brand: 'Car_brand',
    //   category_id: 'category_id',
    // });

    const car2 = await carsRepository.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 110.0,
      license_plate: 'Car_plate',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: '12345',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: car2.category_id,
    });

    console.log(cars);

    expect(cars).toEqual([car2]);
  });
});
