import React from "react";
import classes from './Main.module.scss'
import Mockups from '../../images/illustration-mockups.svg'
import Button from "../../components/Button/Button";

const Main = () => {
  return <main className={classes.main}>
    <img src={Mockups} alt="Mockups for Desktop and Mobile" className={classes.main__image} />
    <div className={classes.main__intro}>
        <h1 className={classes['main__intro--heading']}>Build The Community Your Fans Will Love</h1>
        <p className={classes['main__intro--text']}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion.</p>
    <Button>Register</Button>
    </div>
  </main>;
};

export default Main;
