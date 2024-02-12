import './GithubForm.scss';

import { useForm } from "react-hook-form";

import { MagnifyingGlass } from "@phosphor-icons/react"



function GithubForm({ fetchGithub }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const theValue = data.search;
        fetchGithub(theValue);
        reset();
    }

    return (
        <div className="GithubForm">
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="input-box">
                    <input type="text" className={errors.search && "error"} placeholder="Enter GitHub ID" id="search" autoComplete="off" {...register("search", { required: true })} />

                    <button type="submit" disabled={errors.search ? true : false} className={`btn ${errors.search ? "disabled" : ""}`}  > <MagnifyingGlass />   </button>
                </div>


            </form>
        </div>
    );
}

export default GithubForm;
