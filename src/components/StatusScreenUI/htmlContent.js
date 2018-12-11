const htmlContent =
    `<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_b0cff"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BITTREX-STEEMUSD/" rel="noopener" target="_blank"><span class="blue-text">STEEMUSD chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "autosize": true,
  "symbol": "BITTREX:STEEMUSD",
  "interval": "60",
  "timezone": "Etc/UTC",
  "theme": "Dark",
  "style": "2",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "hide_legend": true,
  "allow_symbol_change": true,
  "save_image": false,
  "container_id": "tradingview_b0cff"
}
  );
  </script>
</div>
<!-- TradingView Widget END -->`;
export default htmlContent;