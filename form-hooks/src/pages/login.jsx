import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";




const schema = z.object({
  firstName: z.string().min(2, "სახელი სავალდებულოა"),
  email: z.email("არასწორი ელ.ფოსტა"),
});

export default function Login() {
    
    
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
      
      return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-yellow-400 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-blue-900/80 backdrop-blur-md border border-yellow-400/20 p-8 rounded-2xl shadow-2xl space-y-4"
      >
        <h2 className="text-3xl font-extrabold text-center text-yellow-300 tracking-wide">
          შესვლა
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
          დალოგინდი
        </button>
      </form>
    </div>
        </>
    );
}