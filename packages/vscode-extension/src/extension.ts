import * as vscode from "vscode";
import { createTestController } from "./test-controller";
import { Helper } from "./helper";

export function activate(context: vscode.ExtensionContext) {
	console.debug("Congratulations, your extension 'uuv' is now active !");

	const disposable = vscode.commands.registerCommand("uuv.open", async () => {
		console.debug("Running UUV open command!");
		const terminal = Helper.getUUVTerminal();
		terminal.sendText(Helper.buildUUVCommand("open"));
		terminal.show();
	});

	createTestController();

	context.subscriptions.push(disposable);
}
