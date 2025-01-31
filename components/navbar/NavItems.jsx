import Link from "next/link"

import { usePathname } from "next/navigation"



const items = [{title:"I-max Advantures",href:"/s"},{title:"showcase",href:"/g"},{title:"culturs",href:"/f"},{title:"Contact",href:"/d"}]

const fwdSlash = <div  className="w-[2px] h-full bg-brand rotate-[20deg]" ></div>
export const NavItems = () => {
    const pathname = usePathname();
  return (
    <div className="md:flex gap-5 h-20 hidden" >

        {
            items.map((item,index) => {
                return (
                    <div key={index} className={`flex items-center gap-5 ${
                    pathname === item.href
                        ? 'opacity-100 '
                        : 'opacity-50 hover:opacity-100 hover:text-brand'
                }`} >
                        <Link href={item.href} className="text-base" >{item.title}</Link>
                        {
                            index !== items.length - 1 && fwdSlash
                        }
                    </div>
                )
            })
        }

    </div>
  )
}

export const NavItemsMob = ()=>{
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-end gap-5  md:hidden px-7 py-5  " >
            {
                items.map((item,index) => <div key={index} className={`flex flex-row gap-5  ${
                    pathname === item.href
                        ? 'opacity-100'
                        : 'opacity-50 hover:opacity-100 '
                } `} ><Link href={item.href} className="text-base" >{item.title}</Link><div className="w-[2px] bg-brand rotate-[15deg]" ></div></div>)
            }
        </div>
    )

}




