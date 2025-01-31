import Link from "next/link"
import { H1 } from "../typography/FontStyles"


const Logo = () => {
  return (
    <Link href={'/'} className="text-brand" >
        <H1>Imax</H1>
    </Link>
  )
}

export default Logo