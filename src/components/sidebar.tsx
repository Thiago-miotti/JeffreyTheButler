'use client'

import Image from 'next/image'
import JeffreyLogo from '../../public/JeffreyLogo.png'
import JeffreyLogoIcon from '../../public/JeffreyIconOnly.png'
import {
  Cog,
  History,
  LayoutDashboard,
  LogOut,
  PanelRight,
  ShelvingUnit,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import { redirect, usePathname } from 'next/navigation'
import Link from 'next/link'
import { authClient, signOut } from '@/utils/auth-client'
import { UserSessionData } from '@/types/user'

type NavLinksType = {
  label: string
  route: string
  icon: LucideIcon
}

const NavLinks: NavLinksType[] = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Despensa',
    route: '/inventory',
    icon: ShelvingUnit,
  },
  {
    label: 'Histórico',
    route: '/shopping-history',
    icon: History,
  },
  {
    label: 'Configurações',
    route: '/settings',
    icon: Cog,
  },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()
  const { data: session, isPending, error } = authClient.useSession()

  if (!session) return <p>Not logged in</p>

  const user: UserSessionData = session.user

  console.log(session)

  function getInitials(name: string) {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect('/login')
        },
      },
    })
  }

  return (
    <div
      className={cn(
        'card h-full bg-base-100 sticky p-2 flex flex-col justify-between overflow-x-hidden',
        'transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-20' : 'w-75',
      )}
    >
      <div>
        {isCollapsed ? (
          <>
            <div className="w-full h-18 flex flex-col items-center mt-2">
              <Image
                src={JeffreyLogoIcon}
                alt="Jeffrey Logo"
                width={35}
                height={35}
                className="ml-2"
              />
              <button
                type="button"
                className="btn btn-square bg-transparent border-0"
                onClick={toggleSidebar}
              >
                <PanelRight className="size-5 text-neutral/80 hover:text-zinc-800" />
              </button>
            </div>
            <div className="divider mt-6"></div>
          </>
        ) : (
          <>
            <div className="w-full h-18 flex justify-between items-center p-4">
              <Image src={JeffreyLogo} alt="Jeffrey Logo" width={100} height={100} />
              <button
                className="btn btn-square bg-transparent border-0"
                onClick={toggleSidebar}
                type="button"
              >
                <PanelRight className="size-6 text-neutral/80 hover:text-zinc-800" />
              </button>
            </div>
            <div className="divider"></div>
          </>
        )}

        <div className="flex flex-col gap-2 px-2">
          {NavLinks.map((item) => (
            <button
              key={item.label}
              className={cn(
                'flex items-center group text-neutral/80 font-default font-semibold cursor-pointer hover:bg-white hover:text-primary py-4 px-2 rounded-lg',
                pathname === item.route && 'bg-white text-primary',
              )}
              type="button"
            >
              <Link href={item.route} className="flex items-center">
                <item.icon
                  className={cn(
                    'text-neutral/80 group-hover:text-primary shrink-0',
                    pathname === item.route && 'text-primary',
                  )}
                />
                <span
                  className={cn(
                    'transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-left',
                    isCollapsed ? 'w-0 opacity-0 ml-0' : 'w-full opacity-100 ml-6',
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </button>
          ))}
        </div>
      </div>
      <div className="py-2">
        <div className="divider"></div>
        {isCollapsed ? (
          isPending ? (
            <div className="flex w-52 flex-col gap-4 px-2">
              <div className="flex items-center gap-4">
                <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                  <div className="skeleton h-4 w-20"></div>
                  <div className="skeleton h-4 w-28"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col px-2 gap-4">
              {user.image ? (
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <Image src={user.image} alt="User avatar" />
                  </div>
                </div>
              ) : (
                <div className="avatar avatar-placeholder">
                  <div className="bg-neutral text-neutral-content w-12 rounded-full">
                    <span className="font-bold">{getInitials(user.name)}</span>
                  </div>
                </div>
              )}
              <LogOut className="text-primary cursor-pointer ml-4" />
            </div>
          )
        ) : isPending ? (
          <div className="flex w-52 flex-col gap-4 px-2">
            <div className="flex items-center gap-4">
              <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full px-2 flex gap-2 items-center">
            {user.image ? (
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Image src={user.image} alt="User avatar" />
                </div>
              </div>
            ) : (
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <span className="font-bold">{getInitials(user.name)}</span>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-1 w-full">
              <p className="font-default font-bold text-neutral">{user.name}</p>
              <div className="flex items-center w-full">
                <p className="font-default text-neutral overflow-hidden text-ellipsis flex-3">
                  {user.email}
                </p>
                <div className="flex-1 flex justify-center">
                  <LogOut
                    className="text-primary size-5 cursor-pointer"
                    onClick={() => handleSignOut()}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
