import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Disclosure, } from '@headlessui/react'

const navigation = [
  { name: 'Rockets', href: '/', current: true },
  { name: 'Dragons', href: '/dragons', current: false },
  { name: 'Missions', href: '/missions', current: false },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  return (
    <Fragment>

      <div className="min-h-full sticky top-0 z-50">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center grow">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Space Travelers logo"
                      />
                    </div>
                    <div className="hidden md:block md:grow">
                      <div className="ml-10 flex items-baseline space-x-4 justify-end ">
                        {navigation.map((item) => (

                          <Link to={item.href} key={item.name} className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                            aria-current={item.current ? `page` : undefined}
                          >{item.name}</Link>

                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile menu  */}
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 h-screen">
                  {navigation.map((item) => (
                    <Link to={item.href} key={item.name}>
                      <Disclosure.Button
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? `page` : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </Fragment>
  )
}

export default Header;