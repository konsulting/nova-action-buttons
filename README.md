# nova-action-buttons

*THIS IS AN EARLY VERSION, TESTING AND FEEDBACK IS RECOMMENDED*

As simple as possible package to allow showing actions as buttons rather than just dropdown list items.

We have used some other packages in the past, but as Nova evolves they have broken and not maintained quickly enough leading to bugs that are hard to track down.

To install, simply:

For Nova 4
```
    composer require konsulting/nova-action-buttons:^0.1
```

For Nova 5
```
    composer require konsulting/nova-action-buttons:^0.3
```

To use, you will need to identify actions to be shown as a button. This will apply to Index Actions, Detail actions, Standalone and Inline Actions.

First add the trait to the Action.
```php
use \Konsulting\NovaActionButtons\ShowAsButton;

class ExampleAction extends Action {
    use InteractsWithQueue, Queueable, ShowAsButton;
    //...
}
```    

Then in the resources `actions` method you need to use the `showAsButton()` method when building the action.

```php
    (new ExampleAction)->showAsButton();
```

We are happy to receive contributions to this package.