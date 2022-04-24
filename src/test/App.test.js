import { mount, configure } from "enzyme";
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App"

configure({adapter: new Adapter()}) 

test('renders first page to load as home page ', () => {
  const wrapper = mount(<App />)
  act(() => {
    wrapper.find("button")
  })

  expect(wrapper.text()).toBe("HomeAboutDatasetContactSearchDRA_FINANCEWho is DRA_FinanceThis website was created to help you find the latest financial news around the world.Use the search bar to search latest currencies, stock markets, cryptocurrencies etc.Also if you want to find out more about what we do and who we are then just click the button below.Read MoreStock MarketsWhat’s next for the stock market!The Federal Reserve has ramped up its hawkish tone, rattling the U.S. stock market... Read moreLoan Rates in IrelandMost common Financial institutions loan ratesKBC 6.3%BOI 6.8%Ulster Bank 7.9%AIB 9%PTSB 10.5%Revolute 5.9%An Post 5.9%More infoForexFind the latest financial information here.Navigate to our Dataset page by clicking the button below. Also figures updated daily.Check it outHelpful links to see the current stock markets, trading online and much more. www.forex.comdailyfx.commoney.cnn.comfinance.yahoo.comwww.msn.com>>> Click on the buttons below to bring you to external site. <<<forexlive.comwww.marketwatch.comwww.cbn.comwww.bloomberg.comwww.moneycontrol.comwww.forexchurch.comAboutDatasetContact+353-861234567Eyre Square, Galway Irelandinfo@dra_finance.ie©2022 DRA_Finance | All rights reserved")
});

