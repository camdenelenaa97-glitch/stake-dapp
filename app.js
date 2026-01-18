// 已整合你提供的 staking 合约 ABI（来自用户粘贴）
const CONTRACT_ADDRESS = "0xCb5c82879A56006d6eEF2d03391E48ff774919A2";
// 你之前提供的代币合约（作为兜底）
const DEFAULT_TOKEN_ADDRESS = "0x574f567a3f76b555d0a60bacb1110bf79d2c7777";

const stakingAbi = [{"inputs":[{"internalType":"address","name":"_memeToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DividendDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdrawBNB","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdrawMEME","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newBlocks","type":"uint256"}],"name":"LockBlocksUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldToken","type":"address"},{"indexed":false,"internalType":"address","name":"newToken","type":"address"}],"name":"MemeTokenUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"MinLockAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"Unstaked","type":"event"},{"inputs":[],"name":"BURN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DISTRIBUTION_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PENALTY_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dividendPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdrawMEME","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserStake","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"unlockBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStakeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockBlocks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"memeToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minLockAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blocks","type":"uint256"}],"name":"setLockBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newMemeToken","type":"address"}],"name":"setMemeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMinLockAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"dividendPerTokenAtStake","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

const erc20Abi = [
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address) view returns (uint256)",
  "function symbol() view returns (string)",
  "function name() view returns (string)"
];

// UI elements
const connectBtn = document.getElementById("connectBtn");
const addrSpan = document.getElementById("addr");
const networkSpan = document.getElementById("network");
const contractAddressEl = document.getElementById("contractAddress");
const tokenAddressEl = document.getElementById("tokenAddress");
const balanceEl = document.getElementById("balance");
const stakedEl = document.getElementById("staked");
const dividendsEl = document.getElementById("dividends");
const statusEl = document.getElementById("status");

const claimBtn = document.getElementById("claimBtn");
const stakeBtn = document.getElementById("stakeBtn");
const approveBtn = document.getElementById("approveBtn");
const unstakeBtn = document.getElementById("unstakeBtn");
const refreshStakesBtn = document.getElementById("refreshStakesBtn");
const stakeAmountInput = document.getElementById("stakeAmount");
const unstakeIndexInput = document.getElementById("unstakeIndex");
const stakesList = document.getElementById("stakesList");

let provider, signer, userAddress;
let stakingContract, tokenContract;
let tokenDecimals = 18;

// show contract address
contractAddressEl.textContent = CONTRACT_ADDRESS;

// Connect wallet
async function connectWallet(){
  try{
    if (!window.ethereum) throw new Error("未检测到以太钱包（MetaMask 等）");
    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    userAddress = await signer.getAddress();
    addrSpan.textContent = `${userAddress.substr(0,6)}...${userAddress.substr(-4)}`;
    const network = await provider.getNetwork();
    networkSpan.textContent = `${network.name} (chainId: ${network.chainId})`;
    statusEl.textContent = "已连接";
    stakingContract = new ethers.Contract(CONTRACT_ADDRESS, stakingAbi, signer);

    // 尝试通过 memeToken() 探测 token 地址（合约 ABI 中有 memeToken）
    let detectedToken = null;
    try{
      detectedToken = await stakingContract.memeToken();
      if(detectedToken && detectedToken !== ethers.ZeroAddress){
        console.log("detected memeToken:", detectedToken);
      }else{
        detectedToken = null;
      }
    }catch(e){
      detectedToken = null;
    }

    if(detectedToken){
      setTokenContract(detectedToken);
    }else{
      setTokenContract(DEFAULT_TOKEN_ADDRESS);
      console.log("使用默认 token 地址:", DEFAULT_TOKEN_ADDRESS);
    }

    await refreshBalances();
    await listUserStakes();
  }catch(err){
    console.error(err);
    alert("连接钱包失败: " + (err.message || err));
  }
}

// 设置 token 合约
function setTokenContract(tokenAddress){
  if(!tokenAddress) return;
  tokenContract = new ethers.Contract(tokenAddress, erc20Abi, signer);
  tokenAddressEl.textContent = tokenAddress;
  tokenContract.decimals().then(d => { tokenDecimals = d; refreshBalances(); }).catch(()=>{ refreshBalances(); });
}

// 格式化 BigNumber
function formatUnitsSafe(bn){
  try{
    return ethers.formatUnits(bn, tokenDecimals);
  }catch(e){
    try{ return bn.toString(); }catch(_){ return "-"; }
  }
}

function parseAmountToUnits(amountStr){
  try{
    return ethers.parseUnits(amountStr || "0", tokenDecimals);
  }catch(e){
    throw new Error("数量解析失败，请检查输入与代币小数位");
  }
}

// 刷新余额、分红与已质押总量
async function refreshBalances(){
  try{
    if(!signer) return;
    // pending rewards via getPendingRewards
    try{
      const pending = await stakingContract.getPendingRewards(userAddress);
      dividendsEl.textContent = formatUnitsSafe(pending);
    }catch(e){
      dividendsEl.textContent = "-";
    }

    // total staked for user: sum of getUserStake entries
    try{
      const count = await stakingContract.getUserStakeCount(userAddress);
      let total = 0n;
      for(let i=0;i<Number(count);i++){
        try{
          const s = await stakingContract.getUserStake(userAddress, i);
          // s.amount is BigNumber compatible
          total += BigInt(s.amount.toString());
        }catch(e){}
      }
      stakedEl.textContent = (total === 0n) ? "0" : ethers.formatUnits(total.toString(), tokenDecimals);
    }catch(e){
      stakedEl.textContent = "-";
    }

    // token balance
    if(tokenContract){
      try{
        const bal = await tokenContract.balanceOf(userAddress);
        balanceEl.textContent = formatUnitsSafe(bal);
      }catch(e){
        balanceEl.textContent = "-";
      }
    }else{
      balanceEl.textContent = "-";
    }
  }catch(err){
    console.error("刷新失败", err);
  }
}

// 列出用户所有质押条目（并渲染到页面）
async function listUserStakes(){
  stakesList.innerHTML = "";
  try{
    const countBn = await stakingContract.getUserStakeCount(userAddress);
    const count = Number(countBn.toString());
    if(count === 0){
      stakesList.innerHTML = "<li>暂无质押条目</li>";
      return;
    }
    for(let i=0;i<count;i++){
      try{
        const s = await stakingContract.getUserStake(userAddress, i);
        // getUserStake 返回 { amount, startBlock, unlockBlock }
        const amount = formatUnitsSafe(s.amount);
        const start = s.startBlock.toString();
        const unlock = s.unlockBlock.toString();
        const li = document.createElement("li");
        li.textContent = `索引 ${i} — 数量: ${amount} — 开始区块: ${start} — 解锁区块: ${unlock}`;
        stakesList.appendChild(li);
      }catch(e){
        console.warn("读取 stake index failed", i, e);
      }
    }
  }catch(e){
    console.error("列出质押失败", e);
    stakesList.innerHTML = "<li>无法读取质押条目</li>";
  }
}

// 操作：领取分红（调用 claimRewards）
async function claimDividends(){
  try{
    statusEl.textContent = "发送领取交易中...";
    const tx = await stakingContract.claimRewards();
    statusEl.textContent = `交易发送，hash: ${tx.hash}`;
    await tx.wait();
    statusEl.textContent = "领取成功";
    await refreshBalances();
  }catch(err){
    console.error(err);
    statusEl.textContent = "领取失败: " + (err.message || err);
  }
}

// 操作：质押（stake(uint256)）
async function stake(){
  try{
    const amtStr = stakeAmountInput.value;
    if(!amtStr || Number(amtStr) <= 0) return alert("请输入有效质押数量");
    const amount = parseAmountToUnits(amtStr);

    // 如果 tokenContract 存在，检查授权
    if(tokenContract){
      const allowance = await tokenContract.allowance(userAddress, CONTRACT_ADDRESS);
      if(allowance < amount){
        return alert("请先进行授权（Approve），或点击 上方的 批准 按钮。");
      }
    }

    statusEl.textContent = "发送质押交易中...";
    const tx = await stakingContract.stake(amount);
    statusEl.textContent = `交易发送，hash: ${tx.hash}`;
    await tx.wait();
    statusEl.textContent = "质押成功";
    await refreshBalances();
    await listUserStakes();
  }catch(err){
    console.error(err);
    statusEl.textContent = "质押失败: " + (err.message || err);
  }
}

// 操作：取消质押（按索引 unstake(uint256 index)）
async function unstake(){
  try{
    const idxStr = unstakeIndexInput.value;
    if(idxStr === "" || Number(idxStr) < 0) return alert("请输入有效的质押索引（整数）");
    const index = BigInt(Number(idxStr));
    statusEl.textContent = "发送取消质押交易中...";
    const tx = await stakingContract.unstake(index);
    statusEl.textContent = `交易发送，hash: ${tx.hash}`;
    await tx.wait();
    statusEl.textContent = "取消质押成功";
    await refreshBalances();
    await listUserStakes();
  }catch(err){
    console.error(err);
    statusEl.textContent = "取消质押失败: " + (err.message || err);
  }
}

// 授权 ERC20（approve）
async function approveToken(){
  try{
    if(!tokenContract) return alert("尚未设置代币合约地址（请稍后重试）");
    const amtStr = stakeAmountInput.value || "0";
    const amount = parseAmountToUnits(amtStr);
    statusEl.textContent = "发送授权交易中...";
    const tx = await tokenContract.approve(CONTRACT_ADDRESS, amount);
    statusEl.textContent = `授权交易发送，hash: ${tx.hash}`;
    await tx.wait();
    statusEl.textContent = "授权成功";
    await refreshBalances();
  }catch(err){
    console.error(err);
    statusEl.textContent = "授权失败: " + (err.message || err);
  }
}

// 事件绑定
connectBtn.addEventListener("click", connectWallet);
claimBtn.addEventListener("click", claimDividends);
stakeBtn.addEventListener("click", stake);
unstakeBtn.addEventListener("click", unstake);
approveBtn.addEventListener("click", approveToken);
refreshStakesBtn.addEventListener("click", listUserStakes);

// MetaMask account / chain change handling
if(window.ethereum){
  window.ethereum.on && window.ethereum.on("accountsChanged", (accounts) => {
    if(accounts.length === 0){
      addrSpan.textContent = "";
      statusEl.textContent = "已断开钱包";
    }else{
      connectWallet();
    }
  });
  window.ethereum.on && window.ethereum.on("chainChanged", (chainId) => {
    setTimeout(()=>connectWallet(), 100);
  });
}