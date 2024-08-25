import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Logo from "../components/Logo/Logo";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../store/AuthProvider";

export default function Home() {
  // Variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  // State
  const [loading, setLoading] = useState(false);

  // Function
  const onSubmit = async (data) => {
    if (loading) return;

    setLoading(true);

    createUser(data.email, data.password)
      .then((userCredential) => {
        // const user = {
        //     photo: "",
        //     roles: [
        //         "user"
        //     ],
        //     firstName: ""
        // }
        // fetch(`https://believemy-facebook-default-rtdb.europe-west1.firebasedatabase.app/users/${userCredential.user.uid}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(user);
        // })
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        const { code, message } = error;
        if (code == "auth/email-already-in-use") {
          toast.error("Cet email est utilisé.");
        } else {
          toast.error(code);
        }
      });
  };

  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
        <Logo />

        <div className="element lg:w-[400px] w-full">
          <div className="text-center text-lg mb-5">
            S'inscrire sur Facebook
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Adresse e-mail"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Renseignez une adresse valide.",
                },
              })}
              className={`input ${errors.email && "bg-red-50"}`}
            />
            {errors.email && (
              <p className="text-red-400 mb-10">{errors.email.message}</p>
            )}
            <input
              type="password"
              placeholder="Mot de passe"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message:
                    "Le mot de passe ne peut pas contenir moins de 8 caractères.",
                },
              })}
              className="input"
            />
            {errors.password && (
              <p className="text-red-400 mb-10">{errors.password.message}</p>
            )}
            <Button large disabled={loading}>
              S'inscrire
            </Button>
          </form>

          {/* Pass */}
          <div className="flex justify-center mt-5">
            <div className="text-blue-facebook hover:text-blue-500 duration-150 cursor-pointer">
              <Link to="/">Déjà un compte ?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
