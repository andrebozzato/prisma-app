import HouseController from './controllers/HouseController'
import UserController from './controllers/UserController'
import BookingController from './controllers/BookingController'

async function main() {
  const userController = new UserController()
  const houseController = new HouseController()
  const bookingController = new BookingController()

  // const user = await userController.create({
  //   name: 'Andre Bozzato',
  //   email: 'abozzato@gmail.com'
  // })

  // const house = await houseController.create({
  //   title: 'Studio Completo com escritorio',
  //   description: 'Studio com cozinha'
  // })

  const booking = await bookingController.create({
    startDate: new Date(),
    endDate: new Date('2022-09-17'),
    userId: '7c2e8dff-d7ef-4b8f-8dc6-562f8e21d07d',
    houseId: '4c170c86-69cb-4024-b10e-41622d78b539'
  })

  console.log(booking)
}

main()
