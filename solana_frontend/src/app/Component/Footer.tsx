'use client';

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-gray-400 py-4 border-t-4 border-[#1f1f1f] mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#ffffff] text-[20px] font-[700] mb-4">About Solana</h3>
            <p className="text-[14px] font-[500]">
              Powered by Solana, our platform offers lightning-fast transactions and low fees, enabling creators and collectors to thrive in the NFT ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-[#ffffff] text-[20px] font-[700] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://solana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  Solana Website
                </a>
              </li>
              <li>
                <a
                  href="https://phantom.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  Phantom Wallet
                </a>
              </li>
              <li>
                <a
                  href="https://explorer.solana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  Solana Explorer
                </a>
              </li>
              <li>
                <a
                  href="https://docs.solana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  Solana Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#ffffff] text-[20px] font-[700] mb-4">Connect with Us</h3>
            <p className="text-[14px] font-[500] mb-2">Email: deepChainLabs@gmail.com.com</p>
            <p className="text-[14px] font-[500] mb-4">Discord: deepChainLabs</p>
            <div className="flex space-x-4">
          
              <a
                href="https://twitter.com/solana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.87-2.37c-.83.5-1.75.87-2.73 1.07a4.23 4.23 0 0 0-7.21 3.86A12 12 0 0 1 3 4.8a4.23 4.23 0 0 0 1.31 5.64 4.2 4.2 0 0 1-1.92-.53v.05a4.23 4.23 0 0 0 3.39 4.14 4.21 4.21 0 0 1-1.9.07 4.23 4.23 0 0 0 3.95 2.93A8.49 8.49 0 0 1 2 19.55a12 12 0 0 0 6.29 1.84c7.55 0 11.67-6.26 11.67-11.67 0-.18 0-.36-.01-.54a8.35 8.35 0 0 0 2.06-2.12z" />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition"
                aria-label="Discord"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M20.317 4.369c-1.667-1.25-3.667-2.1-5.817-2.369a.67.67 0 0 0-.713.427c-.3.867-.65 1.993-.8 2.427a12.383 12.383 0 0 0-5.482 0c-.155-.427-.506-1.56-.813-2.427a.66.66 0 0 0-.71-.426c-2.17.272-4.168 1.13-5.84 2.37a.695.695 0 0 0-.157.144C-.239 12.137 1.087 17.034 1.85 19.368a.678.678 0 0 0 .433.427c1.417.483 2.868.823 4.336 1.02a.68.68 0 0 0 .72-.414c.34-.657.64-1.333.9-2.03.48.083.953.15 1.42.202.332.035.66.065.983.09.332-.025.66-.056.983-.09.48-.05.953-.12 1.42-.2.27.697.567 1.372.9 2.03a.675.675 0 0 0 .72.413c1.47-.2 2.92-.538 4.337-1.02a.678.678 0 0 0 .432-.427c.762-2.333 2.087-7.23-.157-14.854a.72.72 0 0 0-.153-.146zm-11.4 11.03c-1.185 0-2.155-1.055-2.155-2.352 0-1.297.96-2.352 2.155-2.352 1.19 0 2.155 1.06 2.155 2.352 0 1.296-.96 2.35-2.155 2.35zm6.165 0c-1.19 0-2.155-1.055-2.155-2.352 0-1.297.96-2.352 2.155-2.352 1.185 0 2.155 1.06 2.155 2.352 0 1.296-.96 2.35-2.155 2.35z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-[14px] font-[500] text-gray-500">
            © {new Date().getFullYear()} DeepChainLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
