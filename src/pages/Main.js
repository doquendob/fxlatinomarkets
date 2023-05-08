import React from 'react';

export default function Main({ children, center}) {
    console.log(center);
   let classes = `Main ${center ? 'Main--center' : ''}`;
    return <main className={classes}>{children}</main>;
}
 