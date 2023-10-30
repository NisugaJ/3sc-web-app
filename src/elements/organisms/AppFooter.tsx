const AppFooter = () => {
    return (
        <div className="px-5 bg-black-primary">
            <footer className="footer px-10   text-base-content ">
                <div className="py-4 border-b-2 w-full">
                <aside className="items-center grid-flow-col  ">
                    <img className="text-pink-primary zero:max-md:hidden" src="assets/images/header-logo/header-logo.svg" alt="" />
                </aside>
                </div>
            </footer>
            <footer className="footer p-10  text-base-content">
                <nav>
                    <header className="text-[12px]  text-white-primary font-bold uppercase">Bournemouth</header>
                    <p className="font-mono text-[12px] text-white-primary leading-snug">
                        Telephone House

                    </p>
                    <p className="font-mono text-[12px] text-white-primary leading-tight">
                        Bournemouth, BH1 3NE
                    </p>
                </nav>
                <nav>
                    <header className="text-[12px]  text-white-primary font-bold uppercase">London</header>
                    <p className="font-mono text-[12px] text-white-primary leading-tight">
                        51 Eastcheap
                    </p>
                    <p className="font-mono text-[12px] text-white-primary leading-tight">
                        London, EC3M 1JP
                    </p>
                </nav>
                <nav>
                    <header className="text-[12px]  text-white-primary font-bold uppercase">Washington</header>
                    <p className="font-mono text-[12px] text-white-primary leading-tight">
                        80 M Street SE
                    </p>
                    <p className="font-mono text-[12px] text-white-primary leading-tight">
                        Washington, D.C 20003
                    </p>
                </nav>
                <nav>
                    <header className="text-[12px]  text-white-primary font-bold uppercase">Florida</header>
                    <p className="font-mono text-[12px] text-white-primary leading-tight">
                        7901 4th St N, STE 300
                    </p>
                    <p className="font-mono text-[12px] text-white-primary leading-tight">
                        St. Petersburg FL 33702
                    </p>
                </nav>
                <nav className="md:place-self-center md:justify-self-end">
                    <header className="text-[12px]  text-white-primary font-bold uppercase">Get social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white-primary"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a>
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3767 0H6.62299C2.97108 0 0 2.72362 0 6.07121V15.9288C0 19.2765 2.97108 22 6.62299 22H17.3767C21.0289 22 24 19.2764 24 15.9288V6.07121C24.0001 2.72362 21.0289 0 17.3767 0ZM21.8707 15.9288C21.8707 18.2002 19.8548 20.0481 17.3769 20.0481H6.62299C4.14522 20.0482 2.1294 18.2002 2.1294 15.9288V6.07121C2.1294 3.79992 4.14522 1.95195 6.62299 1.95195H17.3767C19.8546 1.95195 21.8706 3.79992 21.8706 6.07121V15.9288H21.8707Z" fill="white" />
                                <path d="M12.0006 5.33203C8.59058 5.33203 5.81641 7.87503 5.81641 11.0009C5.81641 14.1266 8.59058 16.6695 12.0006 16.6695C15.4106 16.6695 18.1848 14.1266 18.1848 11.0009C18.1848 7.87503 15.4106 5.33203 12.0006 5.33203ZM12.0006 14.7174C9.76488 14.7174 7.9458 13.0502 7.9458 11.0007C7.9458 8.9512 9.76473 7.28385 12.0006 7.28385C14.2365 7.28385 16.0554 8.9512 16.0554 11.0007C16.0554 13.0502 14.2363 14.7174 12.0006 14.7174Z" fill="white" />
                                <path d="M18.4424 3.67578C18.0322 3.67578 17.6291 3.82803 17.3394 4.0948C17.0482 4.36026 16.8809 4.72983 16.8809 5.10721C16.8809 5.48341 17.0484 5.85285 17.3394 6.11962C17.629 6.38508 18.0322 6.53864 18.4424 6.53864C18.8541 6.53864 19.2558 6.38508 19.5469 6.11962C19.8379 5.85285 20.004 5.48328 20.004 5.10721C20.004 4.72983 19.8379 4.36026 19.5469 4.0948C19.2573 3.82803 18.8541 3.67578 18.4424 3.67578Z" fill="white" />
                            </svg>

                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white-primary"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </a>
                        <a>
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.0807 0H2.05053C0.956496 0 0 0.722063 0 1.71347V20.1146C0 21.1117 0.956496 22 2.05053 22H22.0744C23.1747 22 24 21.106 24 20.1146V1.71347C24.0062 0.722063 23.1747 0 22.0807 0ZM7.43942 18.3381H4.00103V8.53868H7.43942V18.3381ZM5.839 7.04871H5.814C4.71371 7.04871 4.00103 6.29799 4.00103 5.35817C4.00103 4.40115 4.73247 3.66762 5.85776 3.66762C6.98305 3.66762 7.67073 4.39542 7.69573 5.35817C7.69573 6.29799 6.98305 7.04871 5.839 7.04871ZM20.0052 18.3381H16.5668V12.9799C16.5668 11.6963 16.0666 10.8195 14.8226 10.8195C13.8723 10.8195 13.3097 11.4097 13.0596 11.9828C12.9658 12.1891 12.9408 12.4699 12.9408 12.7564V18.3381H9.50245V8.53868H12.9408V9.90258C13.441 9.24928 14.2224 8.30946 16.0416 8.30946C18.2985 8.30946 20.0052 9.67335 20.0052 12.6132V18.3381Z" fill="white" />
                            </svg>

                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white-primary"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                        </a>
                    </div>
                </nav>
            </footer>
            <footer className="footer px-10 py-2 text-base-content">
                <aside className="flex justify-between w-full">
                    <p className="text-white-primary font-mono text-[12px]">
                        © 2023 3 Sided Cube
                    </p>
                    <p className="text-white-primary font-mono text-[12px]">
                        Let’s Build Tech For Good
                    </p>
                </aside>
            </footer>
        </div>
    )
}

export default AppFooter
