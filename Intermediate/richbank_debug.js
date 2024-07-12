const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

function getAccountById (id)
{
	for (const accounting in accounts){
		if (accounting.id === id){
			return accounting;
		}
	} 	
}

function createAccount (newAccountId, newAccountOwner)
{
	const account = getAccountById(newAccountId); //get account by the new id

	if(account){
		throw newError("The account is already in the system"); //error for account already exists
	}
	if(!Number.isFinite(newAccountId) || newAccountId <= 0){
		throw newError("AccountID cannot have negative number. Go back to recreate a new one");
	}
	if(typeof newAccountOwner !== "string" || newAccountOwner.trim() === ""){
		throw newError("Account owner cannot have an empty string");//returns if the string is empty
	}
	accounts.push(
		{
			id: newAccountId,
			owner: newAccountOwner,
			balance: 0
		});
}

function depositMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account) //account does not exist
	{
		throw new Error("Account not found");
	}
	if (!Number.isFinite(amount) || amount <= 0){ //amount cannot be less than 0
		throw new Error("Invalid deposit. It has to be a positive finite number.")
	}
	account.balance += amount;
}

function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount))
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
	}
	if (account.balance < account){ //error message for unable to withdraw from account
		throw new Error("Insufficient amount to withdraw from account");
	}
	account.balance -= amount;
}

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount)
	{
		throw new Error("Source account not found.");
	}

	if (!Number.isFinite(amount) || amount < 0)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}
	if (fromAccount.balance < amount) //if funds are not available to transfer
		{
			throw new Error("Insufficient amount to transfer to another account");
		}
	
	toAccount.balance += amount;
}

/*
Hints:

getAccountById("1");

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)

withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501)

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
*/
