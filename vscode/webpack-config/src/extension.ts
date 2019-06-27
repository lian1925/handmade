
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello VS Code!');
	});


	let showTime = vscode.commands.registerCommand("extension.showTime", () => {
		let time = new Date()
		vscode.window.showErrorMessage(time.toLocaleTimeString())
	})
	context.subscriptions.push(disposable, showTime)

	let provider = vscode.languages.registerCompletionItemProvider("plaintext", {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const simpleCompletion = new vscode.CompletionItem("hello Vs Code.");

			const snippet = new vscode.CompletionItem("good part of the day.")
			snippet.insertText = new vscode.SnippetString("good ${1|moring,afternoon|}. It is ${1}, right?");
			snippet.documentation = new vscode.MarkdownString("insert a snippet that you select.")

			const commit = new vscode.CompletionItem("console")
			commit.commitCharacters = ['.']
			commit.documentation = new vscode.MarkdownString("press `.` to get `console.`")

			const commandCompletion = new vscode.CompletionItem('new');
			commandCompletion.kind = vscode.CompletionItemKind.Keyword;
			commandCompletion.insertText = 'new ';
			commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };


			return [simpleCompletion, snippet, commit, commandCompletion
			]
		}
	})

	let log = vscode.languages.registerCompletionItemProvider("plaintext", {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			let linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (!linePrefix.endsWith('console.')) {
				return undefined
			}

			return [
				new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
				new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
				new vscode.CompletionItem('error', vscode.CompletionItemKind.Method)
			]
		}
	}, '.')
	context.subscriptions.push(provider, log)
}

export function deactivate() { }
