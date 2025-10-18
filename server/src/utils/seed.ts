import {faker} from '@faker-js/faker'
import prisma from './prismaConfig.ts'

async function main() {

    await prisma.product.deleteMany()

    const fakeData = Array.from({length:100}).map(() => {

        return {
            name: faker.commerce.productName(),
            price: +faker.commerce.price({min:10, max:500, dec:2}),
            description: faker.commerce.productDescription(),
        }
    })

    await prisma.product.createMany({
        data: fakeData
    })


    // console.log(fakeData)
}

main().catch(() => {
    console.log('Error seeding data');
    process.exit(1)
}).finally(() => {
    console.log('Seeding finished');
    prisma.$disconnect()
})