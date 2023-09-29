<?php

namespace Konsulting\NovaActionButtons;

trait ShowAsButton
{
    function showAsButton(): static
    {
        $this->withMeta(['showAsButton' => true]);

        return $this;
    }
}
