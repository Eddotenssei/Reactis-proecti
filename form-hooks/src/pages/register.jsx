import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const regions = [
  "თბილისი",
  "კახეთი",
  "იმერეთი",
  "აჭარა",
  "სამეგრელო",
  "გურია",
  "რაჭა-ლეჩხუმი",
  "ქვემო ქართლი",
  "შიდა ქართლი",
  "სამცხე-ჯავახეთი",
  "მცხეთა-მთიანეთი",
];
// AXLEBI
//COERCE
// const phoneRegex = /^\+?9955\d{8}$/;

const schema = z.object({
  firstName: z.string().min(2, "სახელი სავალდებულოა"),
  lastName: z.string().min(2, "გვარი სავალდებულოა"),
  email: z.email("არასწორი ელ.ფოსტა"),
  phone: z.string().min(9, "ნომერი უნდა იყოს მინიმუმ 9 სიმბოლო").max(9, "ნომერი უნდა იყოს მაქსიმუმ 9 სიმბოლო"),
  class: z.coerce
    .number()
    .min(6, "კლასი უნდა იყოს მინიმუმ 6")
    .max(12, "კლასი უნდა იყოს მაქსიმუმ 12"),
  region: z.string().min(1, "აირჩიე რეგიონი"),
  username: z.string().min(2, "მინიმუმ 2 სიმბოლო"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-yellow-400 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-blue-900/80 backdrop-blur-md border border-yellow-400/20 p-8 rounded-2xl shadow-2xl space-y-4"
      >
        <h2 className="text-3xl font-extrabold text-center text-yellow-300 tracking-wide">
          რეგისტრაცია
        </h2>

        <div className="space-y-1">
          <p className="block text-yellow-200 font-medium">სახელი</p>
          <input
            id="firstName"
            {...register("firstName")}
            placeholder="სახელი"
            className="input"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <p className="block text-yellow-200 font-medium">გვარი</p>
          <input
            id="lastName"
            {...register("lastName")}
            placeholder="გვარი"
            className="input"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <p className="block text-yellow-200 font-medium">ელ.ფოსტა</p>
          <input
            id="email"
            {...register("email")}
            placeholder="ელ.ფოსტა"
            className="input"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <p className="block text-yellow-200 font-medium">ტელეფონი</p>
          <input
            id="phone"
            {...register("phone")}
            placeholder="+9955XXXXXXXX"
            className="input"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <p className="block text-yellow-200 font-medium">კლასი</p>
          <input
            id="class"
            type="number"
            {...register("class")}
            placeholder="კლასი"
            className="input"
          />
          {errors.class && (
            <p className="text-red-500 text-sm mt-1">{errors.class.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <p className="block text-yellow-200 font-medium">რეგიონი</p>
          <select id="region" {...register("region")} className="input">
            <option value="">აირჩიე რეგიონი</option>
            {regions.map((r) => (
              <option>{r}</option>
            ))}
          </select>
          {errors.region && (
            <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <p htmlFor="username" className="block text-yellow-200 font-medium">
            ნიკნეიმი
          </p>
          <input
            id="username"
            {...register("username")}
            placeholder="ნიკნეიმი"
            className="input"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <p className="block text-yellow-200 font-medium">პაროლი</p>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="პაროლი"
            className="input"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-blue-950 font-bold py-2.5 rounded-xl hover:bg-yellow-300 transition-all duration-200 shadow-md hover:shadow-yellow-400/40"
        >
          დარეგისტრირდი
        </button>
      </form>
    </div>
  );
}
