import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://explorer.jambulmerah.dev/logo.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Explorer',
      href: 'https://explorer.jambulmerah.dev',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Website',
      href: 'https://jambulmerah.dev',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/jambulmerah',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/jambulmerah_',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Telegram',
    href: 'https://t.me/jambul_merah',
    icon: 'SendIcon',
  })

  return chainMenus
}

export default processMenu()
