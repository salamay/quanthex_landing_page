// Central place for landing page copy and links.
// Replace the store URLs with your live listings when they are ready.

export const STORE_LINKS = {
  appStore: "#download",
  googlePlay: "https://play.google.com/store/apps/details?id=com.quanthex.mining&hl=en",
};

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_PILLS = [
  "Multi-Wallet",
  "Deposit & Send",
  "Cross-Chain Trade",
];

export const SUPPORTED_ASSETS = [
  { symbol: "BNB", name: "BNB", network: "BSC", color: "#F3BA2F", text: "#1E1027" },
  { symbol: "DOGE", name: "Dogecoin", network: "BSC", color: "#C2A633", text: "#ffffff" },
  { symbol: "USDT", name: "Tether USD", network: "BSC · ETH", color: "#26A17B", text: "#ffffff" },
  { symbol: "USDC", name: "USD Coin", network: "ETH", color: "#2775CA", text: "#ffffff" },
];

export const FEATURES = [
  {
    icon: "wallet",
    title: "Multi-Wallet",
    body: "Create or import several wallets and switch between them in a tap. Keep savings, trading and everyday funds neatly apart.",
  },
  {
    icon: "arrows",
    title: "Deposit & Send",
    body: "Receive with a QR code or address and send to anyone on a supported network, with fees shown before you confirm.",
  },
  {
    icon: "swap",
    title: "Cross-Chain Trade",
    body: "Swap between assets with the live rate and minimum received displayed up front, so there are no surprises.",
  },
  {
    icon: "chart",
    title: "Portfolio at a glance",
    body: "See your total value and every asset across BSC and Ethereum on one screen. Hide balances with a tap when you need privacy.",
  },
];

export const STEPS = [
  {
    title: "Download & create",
    body: "Install Quanthex Wallet, create a new wallet or import one you already have, and back up your recovery phrase.",
  },
  {
    title: "Fund your wallet",
    body: "Deposit supported assets like BNB, USDT or USDC from another wallet or exchange using your wallet address.",
  },
  {
    title: "Send & trade",
    body: "Send to anyone on a supported network or swap between assets, with rates and fees shown before you confirm.",
  },
];

export const SECURITY_POINTS = [
  {
    icon: "key",
    title: "Non-custodial by design",
    body: "Your keys are generated and kept on your device. Quanthex never holds your funds or your recovery phrase.",
  },
  {
    icon: "eye",
    title: "Privacy on screen",
    body: "Hide your portfolio value instantly when you're in public. Your balances, your call.",
  },
  {
    icon: "layers",
    title: "Transparent on-chain",
    body: "Deposits, transfers and swaps settle on public blockchains, so every transaction can be verified independently.",
  },
  {
    icon: "shield",
    title: "Clear before you confirm",
    body: "Rates, network fees and minimum received are shown up front, before anything is signed.",
  },
];

export const FAQS = [
  {
    q: "What is Quanthex Wallet?",
    a: "Quanthex Wallet is a digital asset wallet and blockchain participation platform. It lets you manage supported assets, deposit, send and trade across chains, all inside one mobile app.",
  },
  {
    q: "Is Quanthex Wallet custodial?",
    a: "No. Quanthex Wallet is non-custodial. Your private keys and recovery phrase stay on your device, which means only you can access and move your funds. Keep your recovery phrase safe — it's the only way to restore your wallet.",
  },
  {
    q: "Which networks and assets are supported?",
    a: "Quanthex currently supports BNB Smart Chain (BSC) and Ethereum, including assets such as BNB, DOGE (BSC), USDT (BSC and ETH) and USDC (ETH). More networks and tokens will be added over time.",
  },
  {
    q: "Can I use more than one wallet?",
    a: "Yes. You can create or import multiple wallets and switch between them from the home screen.",
  },
];
