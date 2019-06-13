
import * as React from 'react';
type Props = {
  title: string
}
export default function Home(props: Props) {
  return <div>
    <h3>Hello,{props.title}</h3>
    <p>It is home page.</p>
  </div>
}