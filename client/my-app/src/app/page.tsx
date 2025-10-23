import Image from "next/image";

export default function Home() {
///////////////////////////////////////////////////////////////////////////////////

  // type SizeType = {
  //   small: "sm",
  //   medium: "md",
  //   large: "lg"
  // };

  // const size = {
  //   small: "sm",
  //   medium: "md",
  //   large: "lg"
  // } as const;

  // const test = (arg: "sm" | "md" | "lg") => {

  // };

  // test(size["small"]);
/////////////////////////////////////////////////////////////////////////////////////

  // type Size = "sm" | "md" | "lg"
  // type Color = "red" | "blue" | "green"
  
  // type argumentType = `${Size}-${Color}`

  // const test = (val: "sm" | "md" | "lg") => {
  //     console.log(`The chosen style is ${val}`);
  // }
  
  // test("sm-red");
  // test("md-blue");
  // test("lg-green");

  ///////////////////////////////////////////////////////////////////////////////////

  // const role = {
  //   age: 20,
  //   name: "John",
  //   zipcode: "12324",
  //   id: 3,
  //   job: "developer",
  // };

  // type test<T> = {
  //   readonly [P in keyof typeof role]: typeof role[P];
  // };

  //////////////////////////////////////////////////////////////////////////////////

  // const role = {
  //   age: 20,
  //   name: "John",
  //   zipcode: "12324",
  //   id: 3,
  //   job: "developer",
  // };

  // type test<T> = {
  //   readonly [P in keyof T]: T[P];
  // };
 
  // type test2 = test<typeof role>;


  // const user = {
  //   id:1,
  //   name: "John",
  //   email: "john@gmail.com"
  // }   

  // const getUserProperty = (obj, key) => {
  //   return obj[key];
  // };

  // console.log(getUserProperty(user, "name"));

////////////////////////////////////////////////////////////////////////////////

  //   const user = {
  //   id:1,
  //   name: "John",
  //   email: "john@gmail.com"
  // }   

  // // type UserType = typeof user;
  // // type UserKey = keyof UserType;

  // // const getUserProperty =(obj: UserType, key: UserKey): UserType[UserKey] => {
  // //   return obj[key];
  // // }

  // // type UserType = typeof user;
  // // type UserKey = keyof UserType;

  // const getUserProperty = <T,>(obj: T, key: keyof T): T[keyof T] => {
  //   return obj[key];
  // }

  // getUserProperty<typeof user>(user, "name");

////////////////////////////////////////////////////////////////////////////////


  // type user = {
  //   name: string;
  //   age: number;
  //   isAdmin: boolean;
  // }

  // type test = Pick<user, "name" | "age"> ;
  // type test

//////////////////////////////////////////////////////////////////////////////

  // const user = {
  //   name: "John",
  //   age: 20,
  //   isAdmin: true,
  // }
  
  // type UserType = typeof user[keyof typeof user]; 

////////////////////////////////////////////////////////////////////////////////

// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type test = {
//   [P in typeof tuple[number]]: P;
// };



////////////////////////////////////////////////////////////////////////////////  


// type Result = MyExclude <"a" | "b" | "c", "a">;

// type MyExclude<T, K> = T extends K ? never : T;



  return (
    <div className="flex gap-3 flex-wrap">
      <div className="max-w-sm mx-auto">
        <div className="rounded-2xl bg-white shadow-md p-5 border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Wireless Headphones
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            High-quality sound with noise cancellation and 20h battery life.
          </p>
          <div className="text-xl font-bold text-indigo-600">$129.99</div>
        </div>
      </div>
      <div className="max-w-sm mx-auto">
        <div className="rounded-2xl bg-white shadow-md p-5 border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Wireless Headphones
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            High-quality sound with noise cancellation and 20h battery life.
          </p>
          <div className="text-xl font-bold text-indigo-600">$129.99</div>
        </div>
      </div>
      <div className="max-w-sm mx-auto">
        <div className="rounded-2xl bg-white shadow-md p-5 border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Wireless Headphones
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            High-quality sound with noise cancellation and 20h battery life.
          </p>
          <div className="text-xl font-bold text-indigo-600">$129.99</div>
        </div>
      </div>
      <div className="max-w-sm mx-auto">
        <div className="rounded-2xl bg-white shadow-md p-5 border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Wireless Headphones
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            High-quality sound with noise cancellation and 20h battery life.
          </p>
          <div className="text-xl font-bold text-indigo-600">$129.99</div>
        </div>
      </div>
    </div>
  );
}
